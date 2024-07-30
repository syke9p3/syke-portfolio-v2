import "./markdown.css"

const Markdown = () => {
    return (
        <div className="markdown">
            <section>
                <h3>About the Project</h3>
                <p>README.md</p>
                <p>Thesis Project</p>
                <p>Multilabel Classification of Tagalog Hate Speech using Bidirectional Encoder Representations from Transformers (BERT). The model classifies a hate speech according to one or more categories: Age, Gender, Physical, Race, Religion, and Others.</p>
            </section>
            <div className="flex space-x-4">
                <button className="rounded-md px-2 flex space-x-2 hover:bg-catppuccinMantle animate">
                    <h6>icon</h6>
                    <h6>live project</h6>
                </button>
                <button className="rounded-md px-2 flex space-x-2 hover:bg-catppuccinMantle animate">
                    <h6>icon</h6>
                    <h6>source code</h6>
                </button>
            </div>
            <code>
                ```
                #code
                ```
            </code>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
        </div>
    )
}

export default Markdown
