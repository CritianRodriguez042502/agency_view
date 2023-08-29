import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound, Layout } from "../components/index";
import {
  // static pages
  Initial,
  DevopWeb,
  Design,
  Services,
  Contact,
  About,

  // blog pages
  AllBlogs,
  Categorys,
  BlogDetail,
  Search,

  // Registration pages
  Access,
  Signin,
  Signup,
  Activation,

  // Dashboard pages
  InitialDashboard,
  BlogsUser,
} from "../containers/index";

export function Redirects() {
  return (
    <BrowserRouter>
      <Routes>

        // static pages
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Initial />} />
        <Route path="/home/devop_web" element={<DevopWeb />} />
        <Route path="/home/design" element={<Design />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        // blog pages
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/category/:slug" element={<Categorys />} />
        <Route path="/blogs/blog_detail/:slug" element={<BlogDetail />} />
        <Route path="/blogs/search/:slug" element={<Search/>}/> 

        // Registration pages
        <Route path="/access" element={<Access/>}/>
        <Route path="/access/signin" element={<Signin />} />
        <Route path="/access/signup" element={<Signup />} />
        <Route path="/activate/:uid/:token" element={<Activation />} />

        // Dashboard pages
        <Route path="/dashboard" element={<InitialDashboard />} />
        <Route path="/dashboard/blogs_user" element={<BlogsUser />} />

        //Not found page
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}
