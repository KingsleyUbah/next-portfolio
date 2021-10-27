import {useRouter} from 'next/router'

export default function Comments() {
    const router = useRouter();
    const {blog} = router.query;
    
        
    return (
        <div className="container">
            <div>
                    <h2> You are now reading the comments from the {blog} </h2>
                    <div className="comments">
                        <h3>Comments</h3>
                        <hr />
                        <h5>Marina Costa</h5>
                        <p>Absolutely spot on! Thanks for sharing, Kingsley!</p>
                        <hr />
                        <h5>Marina Costa</h5>
                        <p>Absolutely spot on! Thanks for sharing, Kingsley!</p>
                        <hr />
                        <h5>Marina Costa</h5>
                        <p>Absolutely spot on! Thanks for sharing, Kingsley!</p>
                        <hr />
                        <h5>Marina Costa</h5>
                        <p>Absolutely spot on! Thanks for sharing, Kingsley!</p>
                        <hr />
                        <h5>Marina Costa</h5>
                        <p>Absolutely spot on! Thanks for sharing, Kingsley!</p>
                        <hr />
                        <h5>Marina Costa</h5>
                        <p>Absolutely spot on! Thanks for sharing, Kingsley!</p>
                        
                   
                    </div>
            </div>
        </div>
    )
}