import Header from "~/components/Layout/components/Header";

export default function HeaderOnly ({children}){
    return (
        <div>
            <Header />
            <div ClassName="container" >
                <div className="content">
                 {children}
                </div>
            </div>

        </div>
    )
}