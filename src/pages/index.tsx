'use client'
import Head from 'next/head'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {

  const fetchApiUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/users?limit=10&page=1"
      );
      
    } catch (error) {
      console.error("Error fetching users:", error);
     
    }
  };

  useEffect(() =>{
    fetchApiUser()
  } , [])

  return (
    <>
      <Head>
        <title>Lập trình thật dễ</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Button variant='contained'>Hello world</Button>
    </>
  )
}
