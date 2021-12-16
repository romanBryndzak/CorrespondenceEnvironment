import s from './Main.module.css'


let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Mrr3jGBhBiZTK9uOE4awiYPUFTrW2e3LC86Dmfms0XvSv8R4oPjaBytSTCFD_zNj5TI&usqp=CAU"

function Main() {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src={ava} alt="ava"/>
            </div>
            <div className={s.content}>content</div>
            <div className={s.posts}>
                <div className={s.post}>
                    <img src={ava} alt="ava"/>
                    <span className={s.comment}>Hello people! How are you? <i className="far fa-smile-wink"></i></span>
                    <span className={s.like}><i className="fa fa-thumbs-up"></i> 5</span>
                </div>
            </div>
        </div>
    );
}

export default Main;
