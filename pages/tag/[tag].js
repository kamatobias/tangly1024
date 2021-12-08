import Head from "next/head";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

const RedirectTag = ({ tag }) => {

  useEffect(()=>{
    if(tag){
      window.location.href = `https://blog.tangly1024.com/tag/${tag}`
    }
  })
 

  return (
    <div className={styles.container}>
      <Head>
        <title>塘里</title>
        <meta name="description" content="唐风集里，收卷波澜a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>正在为您加载标签</h1>

        <p className={styles.description}>{tag}</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/" className="ml-1 font-bold">
          闽ICP备20010331号
        </a>
      </footer>
    </div>
  );
};

export async function getStaticPaths() {
  let posts = [];
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params: { tag } }) {
  return {
    props: { tag },
    revalidate: 1,
  };
}

export default RedirectTag;
