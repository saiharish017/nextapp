import React from 'react'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.action';
import { ProfileForm } from '@/components/shared/Form/Question';

async function AskQuaction() {
  //const {userId} = auth();
  const userId = "clerk_01G6X5F28K88P3JBRKVR52T8NV"
  if (!userId) redirect('/sign-in');
  const mongoUser = await getUserById(userId);
  console.log(JSON.stringify(mongoUser._id))

  return (
    <div className='mt-[100px] w-full p-10'>
    <ProfileForm MongoDbId={JSON.stringify(mongoUser._id)}/>
    </div>
  )
}

export default AskQuaction
//<QuactionForm MongoDbId={JSON.stringify(mongoUser._id)}></QuactionForm>
    