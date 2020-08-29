import { Box } from "reflexbox";
import getConfig from 'next/config'
import { parseCookies  } from 'nookies'


function PayedArticles({ articles }) {
	return (
		<>
			<Box variant="container">
				<Box as="h2" my={40}>
					Payed Articles
				</Box>

                {articles.map(article => (
					<div className="article" key={article.id}>
						<h3>{article.Title}</h3>
						<p dangerouslySetInnerHTML={{ __html: article.Body}} />
					</div>
				))}
			</Box>
		</>
	);
}

const { publicRuntimeConfig } = getConfig();
	
export async function getServerSideProps(ctx) {
    const jwt = parseCookies(ctx).jwt

    const res = await fetch(`${publicRuntimeConfig.API_URL}/payed-articles`, {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
    })
    
    const articles = await res.json()

	return {
		props: {
            articles: articles
		},
	};
}

export default PayedArticles;