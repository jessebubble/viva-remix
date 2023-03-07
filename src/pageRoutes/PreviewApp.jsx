import WebAppCTA from "../components/preview/web-app/WebAppCTA"
import Authentication from "../components/preview/web-app/Authentication"
import Payment from "../components/preview/web-app/Payment"
import HeroNavigation from "../components/hero/HeroNavigation"

export default function PreviewApp() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <WebAppCTA />
            <Authentication />
            <Payment />
        </div>
    )
}
