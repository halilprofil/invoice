import Details from "@/components/detailspage";
import SideBar from "@/components/sidebar";
export default async function detail({params}) {
  const {id} = params;
  console.log(id);
  const response = await fetch(`https://invoiceapp.polatturkk.com.tr/api/Invoice/GetInvoice/${id}`, {
    method: "GET",
    headers: {
      accept: "text/plain",
      "Cache-Control": "no-cache", // Cache'yi devre dışı bırak
    },
    cache: "no-store", // fetch API ile cache'yi kapat
  });

  const data = await response.json();
  console.log(data);

  return (
    <div className="detailPage">
      <div>
        <SideBar />
      </div>
      <div>
        <Details data={data} />
      </div>
    </div>
  );
}
