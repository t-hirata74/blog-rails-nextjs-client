import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // APIを叩く
    try {
      await axios.post("http://localhost:3001/api/v1/posts", {
        title: title,
        content: content,
      });
    } catch (err) {
      alert('投稿に失敗しました');
    }
    
    console.log(title, content)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ブログ新規登録</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>タイトル</label>
        <input
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)}
          type="text" />
        <label className={styles.label}>本文</label>
        <textarea 
          className={styles.textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setTitle(e.target.value)}
          />
        <button className={styles.button} type="submit">
          投稿
        </button>
      </form>
    </div>
  )
}

export default CreatePost