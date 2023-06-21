function Pagination({ size, limit, currentPage, onPageChange }) {
    const endpage = Math.ceil(size / limit);

    const handleClick = (e) => {
        let newPage;
        newPage = e.target.value == "<" || e.target.value == ">"
        ? (e.target.value == "<" ? currentPage - 1 : currentPage + 1)
        : parseInt(e.target.value)
        onPageChange(newPage)
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        if (currentPage == 1) {
            for (let i = 1; i <= 3; i++) {
                pageNumbers.push(
                    <button className="pagination_button" key={i} value={i} onClick={handleClick}>{i}</button>
                );
            }
        } else if (currentPage == endpage) {
            for (let i = endpage - 2; i <= endpage; i++) {
                pageNumbers.push(
                    <button className="pagination_button" key={i} value={i} onClick={handleClick}>{i}</button>
                );
            }
        } else {
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(
                    <button className="pagination_button" key={i} value={i} onClick={handleClick}>{i}</button>
                );
            }
        }
        return pageNumbers;
    }

    return (
        <div className="pagination">
            <button className="pagination_button" value={"<"} disabled={currentPage === 1} onClick={handleClick}>{"<"}</button>
            {renderPageNumbers()}
            <button className="pagination_button" value={">"} disabled={currentPage === endpage} onClick={handleClick}>{">"}</button>
        </div>
    );
}

export default Pagination;