'use client'

import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Section from "./components/section/Section";


export default function Home() {
  return (
    <div>
      <Header />
      <Section />
      <Form/>
      <Footer/>
    </div>
  );
}
