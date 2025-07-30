const React = require('react')
const Layout = require('../layouts/Layout')

function Index (props) {
    const engineers = props.engineers

    return (
        <Layout>
            <h1>All Engineers 👷🏻‍♂️</h1>

            <div className="d-flex justify-between align-center mb-3">
                <h2>Engineer Collection</h2>
                <a href={`/engineers/new?token=${props.token}`} className="btn btn-primary">Add Engineer ➕</a>
            </div>

            {engineers.length === 0 ? (
                <div className="text-center">
                    <p>No engineers yet. Add your first engineer!</p>
                    <a href={`/engineers/new?token=${props.token}`} className="btn btn-primary">Create One</a>
                </div>
            ) : (
                <div className="engineers-grid">
                    {engineers.map((engineer) => (
                        <div key={engineer._id} className="engineer-card">
                            <div><strong>{engineer.name}</strong></div>
                            <div>Specialty: {engineer.specialty}</div>
                            <div>Experience: {engineer.yearsExperience} years</div>
                            <div className={`engineer-status ${engineer.available ? 'ready' : 'not-ready'}`}>
                                {engineer.available ? '✅ Available' : '❌ Not Available'}
                            </div>

                            <div className="d-flex gap-2">
                                <a href={`/engineers/${engineer._id}?token=${props.token}`} className="btn btn-secondary">👁️ View</a>
                                <a href={`/engineers/${engineer._id}/edit?token=${props.token}`} className="btn btn-primary">✏️ Edit</a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    )
}

module.exports = Index
