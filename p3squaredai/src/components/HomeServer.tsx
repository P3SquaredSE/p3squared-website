import HeroStatic from "./HeroStatic";
import Capabilities from "./Capabilities";
import HumanAICollab from "./HumanAICollab";

export default function HomeServer() {
    return (
        <main id="main" className="pt-24" aria-label="Main content">
            <HeroStatic />
            <Capabilities />
            <HumanAICollab />
        </main>
    );
}