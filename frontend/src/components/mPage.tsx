import Nav from "./Nav"


function MPage() {
    var Lists=["Login", "Signup"]
    var Link = ["/login/","signup/"]
    return <Nav List={Lists} Link = {Link}/>
}

export default MPage;