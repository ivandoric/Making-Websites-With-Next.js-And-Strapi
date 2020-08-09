import { withTranslation } from '../i18n'
import {Box} from 'reflexbox'

function Contact({t}) {
    return (
        <>
            <Box variant="container">
                <Box as="h2" my={40}>
                    {t('common:Latest Movies')}<br />
                    {t('contact:Contact')}
                </Box>
                <div>
                    {t('contact:This is a contact page')}
                </div>
            </Box>
        </>
    )
}

Contact.getInitialProps = async () => {
    return {
        namespacesRequired: ['common','contact']
    }
}

export default withTranslation()(Contact)
