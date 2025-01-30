import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){

    const cookieStore = await cookies()
    
    try {
      const {email, password} = await request.json()

      if(email === "programingmaster22@gmail.com" && password === "ahmedraja122"){
        cookieStore.set("IsLogin", "1",{
            httpOnly: true
        })
        return NextResponse.json("Login Successful !")
      }else{
        cookieStore.set("IsLogin", "0",{
            httpOnly: true
        })
        return NextResponse.json("Invalid Email or Password !", {status: 401})
      }
    
  } catch (error) {
   return NextResponse.json(error)
  }
   
} 

// export async function GET(){
//     return NextResponse.json("HELLO WORLD !!!")
// } 

