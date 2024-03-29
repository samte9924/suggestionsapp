import Pagination from "@/app/UI/admindashboard/Pagination";
import { fetchSuggestions } from "@/lib/actions";

type SearchParams = {
  page?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  let page = parseInt(searchParams.page ? searchParams.page : "1", 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 8;

  const data = await fetchSuggestions(perPage, page);

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold my-12 text-center md:text-left md:px-4 select-none">
        Admin Dashboard
      </h1>
      <Pagination
        page={page}
        perPage={perPage}
        data={data || { items: [], itemsCount: 0 }}
      />
    </div>
  );
}
