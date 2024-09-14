
function Footer(){
    return(
        <footer className="footer footer-center p-4 bg-ghost text-base text-black z-10 my-5">
            <aside>
                <p>Copyright © 2022 - {new Date().getFullYear()}, All right reserved</p>
                <p>Made with ❤️ by NO.eNd</p>
            </aside>
        </footer>
    );
}


export default Footer;