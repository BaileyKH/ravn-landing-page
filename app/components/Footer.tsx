

const Footer = () => {
    return(
        <footer className="py-4 bg-gray-dark">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p className="text-sm">&copy; {new Date().getFullYear()} RAVN. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;