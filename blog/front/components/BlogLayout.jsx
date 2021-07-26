import Link from 'next/link'
import NavToggle from './NavToggle'

const BlogLayout = ({ children }) => {
    return (
        <>
            <div className="header">
                {/* 로그와 메뉴 */}
                <h1>로고</h1>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/post">
                            <a>글쓰기</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a> 로그인</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/join">
                            <a> 회원가입</a>
                        </Link>
                    </li>
                </ul>
                <NavToggle />
            </div>
            <div className="container">
                {children}
            </div>
            <div className="footer">
                copyright &copy; all reserved
            </div>


        </>
    )
}

export default BlogLayout