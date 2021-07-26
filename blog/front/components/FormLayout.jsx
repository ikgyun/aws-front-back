import Router from 'next/router'
import styeld from './FormLayout.module.css' 
// /* 여기안에 모든 css를 객체로 만들어줌.*/ }

const FormLayout = ({children}) => {
    return (
        <>
            <button onClick={()=>Router.back()}>뒤로가기</button> 
            {children}
            <div className={styeld.footer}>
                copyright &copy; all reserved
            </div>
        </>
    )
}

export default FormLayout