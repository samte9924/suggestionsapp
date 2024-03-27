import Link from "next/link";
import CardsContainer from "./CardsContainer";
import { Suggestion } from "@/lib/actions";
import {
  MdArrowBackIos,
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

export default function Pagination({
  page,
  perPage,
  data,
}: {
  page: number;
  perPage: number;
  data: { items: Suggestion[]; itemsCount: number };
}) {
  const totalPages = data ? Math.ceil(data.itemsCount / perPage) : 0;

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page < 1 || page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) pageNumbers.push(i);
  }
  return (
    <div className="w-full">
      <CardsContainer suggestions={data?.items ?? []} />
      <div className="flex justify-center items-center">
        <div className="flex border border-zinc-700 my-16 gap-4 rounded-lg p-4 shadow-lg">
          {page === 1 ? (
            <>
              <div
                className="opacity-60 select-none flex justify-center items-center"
                aria-disabled="true"
              >
                <RxDoubleArrowLeft />
              </div>
              <div
                className="opacity-60 select-none flex justify-center items-center"
                aria-disabled="true"
              >
                <MdArrowBackIos />
              </div>
            </>
          ) : (
            <>
              <Link
                href={`?page=1`}
                aria-label="Pagina Precedente"
                className="select-none flex justify-center items-center"
              >
                <RxDoubleArrowLeft />
              </Link>
              <Link
                href={`?page=${prevPage}`}
                aria-label="Pagina Precedente"
                className="select-none flex justify-center items-center"
              >
                <MdArrowBackIos />
              </Link>
            </>
          )}

          {pageNumbers.map((pageNumber) => (
            <Link
              href={`?page=${pageNumber}`}
              aria-label={`${pageNumber}`}
              key={pageNumber}
              className={
                page === pageNumber
                  ? "select-none bg-zinc-700/70 px-2 rounded-md"
                  : "select-none"
              }
            >
              {pageNumber}
            </Link>
          ))}

          {page === totalPages ? (
            <>
              <div
                className="opacity-60 select-none flex justify-center items-center"
                aria-disabled="true"
              >
                <MdArrowForwardIos />
              </div>
              <div
                className="opacity-60 select-none flex justify-center items-center"
                aria-disabled="true"
              >
                <RxDoubleArrowRight />
              </div>
            </>
          ) : (
            <>
              <Link
                href={`?page=${nextPage}`}
                aria-label="Pagina Precedente"
                className="select-none flex justify-center items-center"
              >
                <MdArrowForwardIos />
              </Link>
              <Link
                href={`?page=${totalPages}`}
                aria-label="Pagina Precedente"
                className="select-none flex justify-center items-center"
              >
                <RxDoubleArrowRight />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
