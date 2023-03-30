
const Divider = (props) => {
    
    const {top, bottom} = props;

    return (
        <hr style={{border: '0', marginTop: top, marginBottom: bottom}} />
    );
};

export default Divider;