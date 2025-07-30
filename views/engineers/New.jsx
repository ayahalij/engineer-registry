const React = require('react')
const Layout = require('../layouts/Layout')

function New (props) {
    return (
        <Layout>
            <h1>👷 Add New Engineer</h1>

            <form action={`/engineers?token=${props.token}`} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Engineer name..." />
                </div>

                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input type="text" id="specialty" name="specialty" required placeholder="e.g., Civil, Software..." />
                </div>

                <div className="form-group">
                    <label htmlFor="yearsExperience">Years of Experience:</label>
                    <input type="number" id="yearsExperience" name="yearsExperience" placeholder="e.g., 5" />
                </div>

                <div className="form-group">
                    <label htmlFor="available">
                        <input type="checkbox" id="available" name="available" />
                        Available for Projects
                    </label>
                </div>

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">➕ Create Engineer</button>
                    <a href={`/engineers?token=${props.token}`} className="btn btn-secondary">← Back to All Engineers</a>
                </div>
            </form>
        </Layout>
    )
}

module.exports = New
