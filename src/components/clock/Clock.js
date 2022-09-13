import { useEffect, useState } from "react";
export default function Clock(){
    const [dateState, _setDateState] = useState(new Date());
    return (
        <div className="App">
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <p>
            </p>
        </div>
    );
}