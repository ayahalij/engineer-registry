const React = require('react')

function Index({ engineers }) {
  return (
    <div>
      <h1>Engineer Registry</h1>
      <a href="/engineers/new">➕ Add New Engineer</a>
      <ul>
        {engineers.map((engineer, i) => (
          <li key={i}>
            <a href={`/engineers/${engineer._id}`}>{engineer.name}</a> | 
            <a href={`/engineers/${engineer._id}/edit`}> ✏️ Edit</a> | 
            <form method="POST" action={`/engineers/${engineer._id}?_method=DELETE`} style={{ display: 'inline' }}>
              <button type="submit">🗑️ Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

module.exports = Index
