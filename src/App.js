import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card"> 
            <div className="cardBody">
                <h2>Simple Todo List</h2>
                <div className="inputGroup mb-3">
                    <input type="text" className="formCotrol input-todo" placeholder="What you want ToDo ?"/>
                    <div className="inputGroupAppend">
                        <button className="btn btn-add" type="button">新增</button>
                    </div>
                </div>
                <ul className="listGroup">
                    <li className="listGroupItem">
                        todo1
                        <div>
                            <div className="btnGroup">
                                <button type="button" className="btn unComplete">未完成</button>
                                <button type="button" className="btn delete">刪除</button>
                            </div>
                        </div>
                    </li>
                    <li className="listGroupItem">
                        todo2
                        <div>
                            <div className="btnGroup">
                                <button type="button" className="btn unComplete">已完成</button>
                                <button type="button" className="btn delete">刪除</button>
                            </div>
                        </div>
                    </li>
                    <li className="listGroupItem">
                        todo3
                        <div>
                            <div className="btnGroup">
                                <button type="button" className="btn unComplete">已完成</button>
                                <button type="button" className="btn delete">刪除</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
