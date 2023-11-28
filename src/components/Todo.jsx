import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import PropTypes from 'prop-types';


export default function Todo({ todoName, todoDeadline }) {

    return (
        <div className="todo">
            <div className="top">
                <div className="left">
                    {todoName}
                </div>
                <div className="right">
                    <AiFillEdit />
                    <AiFillDelete />
                </div>
            </div>
            <div className="bottom">
                {todoDeadline}
            </div>
        </div>
    )
}

Todo.propTypes = {
    todoName: PropTypes.string,
    todoDeadline: PropTypes.string
}