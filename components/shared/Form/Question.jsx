"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { z } from "zod"
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
import { Input } from "@/components/ui/input";
import { CreateQuestion } from "@/lib/actions/question.action";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  content: z.string().min(20,{message:"gfgfgfgfgfgfgfgfgf"}),
  tags: z.array(z.string()),
})

export function ProfileForm({type, MongoDbId}) {
  
  const router = useRouter()
  const pathname = usePathname()
  
   // const pathname = usePathname();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content:"",
      tags:[],
    },
  })
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

    }}
    const handleTagRemove = (tag, field) => {
        const newTags = field.value.filter((t) => t !== tag); // Filter out the tag that needs to be removed
        form.setValue("tags", newTags); // update the tags[] with the newTags array value
      };
    

  // 2. Define a submit handler.
  async function onSubmit(values) {
    console.log("mongodeId"+MongoDbId)
    await CreateQuestion({
        
        title: values.title,
        content: values.content,
        tags: values.tags,
        author: JSON.parse(MongoDbId),
        path: pathname,
         
    });
    router.push('/')
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question Title*</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              Be specific and imagine you’re asking a question to another person.              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
           
            <FormItem>
              <FormLabel>Content* </FormLabel>
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
                {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag) => (
                        <Badge
                          key={tag}
                          onClick={() =>
                            type !== "Edit"
                              ? handleTagRemove(tag, field)
                              : () => {}
                          }
                          className="flex-center subtle-medium background-light800_dark300 text-light400_light500 gap-2 rounded-md border-none px-4 py-2 capitalize"
                        >
                          {tag}
                          {type !== "Edit" && (
                            <Image
                              src="/assets/icons/close.svg"
                              alt="Close icon"
                              width={12}
                              height={12}
                              className="cursor-pointer object-contain invert-0 dark:invert"
                            />
                          )}
                        </Badge>
                      ))}
                    </div>
                  )}
                 
              </>
              </FormControl>
              <FormDescription>
              Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
            

             
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
