export default function (config = {}, collections = []) {
    return {
        backend: {
            name: 'git-gateway',
            branch: 'master',
        },
        load_config_file: false,
        media_folder: 'static/media',
        public_folder: '/media',
        collections: [
            {
                label: 'Site Details',
                name: 'siteDetails',
                editor: {
                    preview: false,
                },
                files: [
                    {
                        label: 'Details',
                        name: 'details',
                        file: 'siteLaunch/index.md',
                        fields: [
                            {
                                label: 'Site name',
                                name: 'siteName',
                                widget: 'string',
                            },
                        ],
                    },
                ],
            },
            ...collections,
        ],
        ...config,
    };
}
