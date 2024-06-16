export default function Form() {
  return (
    <div className="flex">
      <div className="conter-sms-respo">
        <div>
          <p>hello,you friens</p>
        </div>
        <div>
          <p>yes, my friens</p>
        </div>
      </div>
      <form action="/post">
        <input type="text" className="check-text" />
        <input type="button" value="enviar" className="btn" />
      </form>
    </div>
  );
}
