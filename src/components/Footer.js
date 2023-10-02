
function Footer(){
    return(
        <footer className="footer footer-center p-4 bg-ghost text-base text-black z-10 my-5">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - <a href="https://me.nonlnwza.xyz" target="_blank" className="font-semibold">Nonlnwza.xyz</a></p>
            </aside>
        </footer>
    );
}


export default Footer;