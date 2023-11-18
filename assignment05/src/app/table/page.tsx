export default function Table(){
    return(
        <div>
            <h2>Table</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Doe</td>
                    <td>jane@example.com</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    )
}