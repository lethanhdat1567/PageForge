/* eslint-disable @typescript-eslint/no-explicit-any */
import Test1Page from '@/app/theme/(store)/test1/test1';
import Test2Layout from '@/app/theme/(store)/test2/layout';
import userTemplateApiRequest from '@/HttpRequest/userTemplateRequest';

const templates = {
    test1: Test1Page,
    test2: Test2Layout,
};

async function Theme({ params }: { params: { slug: string[] } }) {
    try {
        const param = await params;
        const storename = await param.slug[0];

        const templateResult = await userTemplateApiRequest.getTemplateByStorename(storename);
        const templateData = (templateResult.payload as any)?.data?.template;

        const templateName = templateData.name;

        if (!(templateName in templates)) {
            return <div>Template component not found</div>;
        }

        const TemplateComponent = templates[templateName as keyof typeof templates];

        return (
            <div>
                <TemplateComponent param={param} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching template:', error);
        return <div>NOT FOUND</div>;
    }
}

export default Theme;
