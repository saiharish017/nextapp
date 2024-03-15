"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateQuection } from "@/lib/actions/question.action";

// ... in your component


const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  textfeld: z.string().min(50,{
    message: "min 50 chr needed",
  }).max(500 ,{
    message: "max 500 chr",
  }),
  tag: z.string(),

})

export function QuactionForm(MongoDbId) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content:"",
      tags:"",
      author:MongoDbId,
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values) {
    await CreateQuection(values);

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const editorRef = useRef(null);
  const handleInputKeyDown= (e,field)=>{
    
    if(e.key==="Enter" && field.name=== "tags"){
      e.preventDefault();

      let tagInput = e.target.value; 
      const tagValue= tagInput.trim();
      if(tagValue!== ""){
        if(tagValue.length>15){
          return form.setError('tags',{
            message:'Tag is too long'
          });
        }
        if(typeof tagValue === 'string' && !field.value.includes(tagValue)){
          form.setValue('tags', [...field.value,tagValue]);
          tagInput=""
          form.clearErrors("tags");
        }else{
          form.trigger();
      }}

    }
 /*  console.log('e.field:', field);           // Inspect the target element
console.log('e.target.value:', e.target.value); */
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
        <FormField
        
          control={form.control}
          name="title"
          render={({ field }) => (
           
            <FormItem >
              <FormLabel>Question Title* </FormLabel>
              <FormControl>
                <Input placeholder="Question" {...field} className="h-[60px] text-yellow-50" />
              </FormControl>
              <FormDescription>
              Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
             
          )}
        />
         <FormField
          control={form.control}
          name="textfeld"
          render={({ field }) => (
           
            <FormItem>
              <FormLabel>TextFeld* </FormLabel>
              <FormControl>
              <Editor
        apiKey="3s16gtp3kxfpmtbtuhao99v1embza4enq20ztfnq9zhibv9y"
        onInit={(evt, editor) => editorRef.current = editor}
        onBlur={field.onBlur}
        onEditorChange={(content)=>field.onChange(content)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
              />
              </FormControl>
              <FormDescription>
              Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
             
          )}
        />
         <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
           
            <FormItem>
              <FormLabel>Tags* </FormLabel>
              <FormControl>
                <>
                <Input placeholder="Tags" onKeyDown={(e)=>handleInputKeyDown(e,field)} className="h-[60px] text-yellow-50" />
                {field.value.length> 0 && ( 
                  <div className="">
                    {field.value.map((tag)=>
                    <button className="px-4 py-2 bg-slate-600 rounded-lg text-white" key ={tag}>{tag}</button>)}
                  </div>
                )}</>
              </FormControl>
              <FormDescription>
              Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
            

             
          )}
        />
        <Button type="submit" onClick={()=>onSubmit()}>Submit</Button>
      </form>
    </Form>
  )
}
