import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationButtons({  setPage }: { setPage: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className="my-6 flex justify-center">
            <Pagination>
                <PaginationContent className="space-x-3">
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            className="text-lg px-4 py-3 rounded-lg"
                            onClick={() => setPage((page) => Math.max(page - 1, 1))}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            className="text-lg px-5 py-3 rounded-lg"
                            onClick={() => setPage(1)}
                        >
                            1
                        </PaginationLink>
                        <PaginationLink
                            href="#"
                            className="text-lg px-5 py-3 rounded-lg"
                            onClick={() => setPage(2)}
                        >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis className="text-lg" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                        onClick={() => setPage((page) => page + 1)}
                            href="#"
                            className="text-lg px-4 py-3 rounded-lg"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export default PaginationButtons;

