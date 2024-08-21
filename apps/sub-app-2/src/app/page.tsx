import style from './page.module.css';

export default function Page() {
  return (
    <div>
      <div className={style.wrapper}>
        <h1 className={style.title}>Welcome sub-app-2 👋</h1>
        <a href="/sub-app-2/foo">Foo</a>
      </div>
    </div>
  );
}
