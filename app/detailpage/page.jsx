import Details from "@/components/detailspage";
import SideBar from "@/components/sidebar";
export default async function detail() {
  return (
    <div className="detailPage">
      <div>
        <SideBar />
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
}
