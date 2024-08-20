import style from './page.module.css';

export default function Page() {
  return (
    <div>
      <div className={style.wrapper}>
        <h1 className={style.title}>Welcome sub-app-1 👋</h1>
      </div>
    </div>
  );
}
