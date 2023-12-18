import styles from "@/app/ui/login/login.module.css"

export default function Login() {
    return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="UserName"/>
        <input type="password" placeholder="Password"/>
        <button> Login </button>
      </form>
    </div>
    )
  }
  