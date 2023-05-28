import Header from "~/Layouts/Header";
function HeaderOnlyLayout({ children }) {
    return (<div>
        <Header />
        <div className="container">
            {children}
        </div>
    </div>);
}

export default HeaderOnlyLayout;