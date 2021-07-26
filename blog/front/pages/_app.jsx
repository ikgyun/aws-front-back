import '../index.css'
import Head from 'next/head'

const App = ({Component}) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap" rel="stylesheet" />
            </Head>
            <Component /> {/* 우리가 만든 파일들이 여기에 위치해요 */}
        </>
    )
}

export default App