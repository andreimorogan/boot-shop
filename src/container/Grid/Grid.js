const Grid = (props) => {
    return (
        <main>
            <div className="album py-5 bg-body-tertiary mt-5">
                <div className="container">
                    <p>Featured</p>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Grid;