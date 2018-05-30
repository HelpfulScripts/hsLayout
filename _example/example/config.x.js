import { m } from '../mithril';
import * as hslayout from '../';
const myConfig = {
    Layout: {
        rows: ["30px", "fill", "10px"],
        css: '.my-example',
        content: [{
                Layout: {
                    columns: ["200px", "fill"],
                    content: [
                        { LeftHead: { lib: "route.lib", field: "route.field" } },
                        { MainHead: { lib: "route.lib", field: "route.field" } }
                    ]
                }
            }, {
                Layout: {
                    columns: ["200px", "fill"],
                    content: [
                        { LeftNav: { lib: "route.lib", field: "route.field" } },
                        { MainNav: { lib: "route.lib", field: "route.field" } }
                    ]
                }
            },
            { Layout: {
                    css: '.hs-site-footer',
                    content: ['(c) Helpful ; Scripts']
                } }
        ]
    },
    route: {
        default: '/api',
        paths: [
            '/api',
            '/api/:lib',
            '/api/:lib/:field'
        ]
    }
};
const example = {
    LeftHead: class extends hslayout.Layout {
        getComponents(node) {
            return 'The Left Head';
        }
    },
    MainHead: class extends hslayout.Layout {
        getComponents(node) { return m('', 'The Main Head'); }
    },
    LeftNav: class extends hslayout.Layout {
        getComponents(node) { return m('', 'The Left Nav'); }
    },
    MainNav: class extends hslayout.Layout {
        getComponents(node) { return m('', 'The Main Nav'); }
    },
    Footer: class extends hslayout.Layout {
        getComponents(node) { return m('.hs-site-footer', '(c) Helpful ; Scripts'); }
    }
};
new hslayout.HsConfig([hslayout, example])
    .attachNodeTree(myConfig, document.getElementById('exampleBase'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZS9jb25maWcueC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQU8sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDO0FBR2hDLE1BQU0sUUFBUSxHQUFHO0lBQ2IsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDL0IsR0FBRyxFQUFFLGFBQWE7UUFDbEIsT0FBTyxFQUFFLENBQUM7Z0JBQ04sTUFBTSxFQUFDO29CQUNILE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7b0JBQzFCLE9BQU8sRUFBRTt3QkFDTCxFQUFFLFFBQVEsRUFBSyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLGFBQWEsRUFBQyxFQUFDO3dCQUN2RCxFQUFFLFFBQVEsRUFBSyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLGFBQWEsRUFBQyxFQUFDO3FCQUMxRDtpQkFDSjthQUFDLEVBQUM7Z0JBQ0gsTUFBTSxFQUFDO29CQUNILE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7b0JBQzFCLE9BQU8sRUFBRTt3QkFDTCxFQUFFLE9BQU8sRUFBSyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLGFBQWEsRUFBQyxFQUFDO3dCQUN0RCxFQUFFLE9BQU8sRUFBSyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLGFBQWEsRUFBQyxFQUFDO3FCQUN6RDtpQkFDSjthQUFDO1lBQ0YsRUFBRSxNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLGlCQUFpQjtvQkFDdEIsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDLEVBQUM7U0FDTDtLQUNKO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUU7WUFDSCxNQUFNO1lBQ04sV0FBVztZQUNYLGtCQUFrQjtTQUNyQjtLQUNKO0NBQ0osQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ1osUUFBUSxFQUFFLEtBQU0sU0FBUSxRQUFRLENBQUMsTUFBTTtRQUNuQyxhQUFhLENBQUMsSUFBVTtZQUNwQixPQUFPLGVBQWUsQ0FBQztRQUMzQixDQUFDO0tBQ0o7SUFDRCxRQUFRLEVBQUUsS0FBTSxTQUFRLFFBQVEsQ0FBQyxNQUFNO1FBQ25DLGFBQWEsQ0FBQyxJQUFVLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELE9BQU8sRUFBRSxLQUFNLFNBQVEsUUFBUSxDQUFDLE1BQU07UUFDbEMsYUFBYSxDQUFDLElBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxFQUFFLEtBQU0sU0FBUSxRQUFRLENBQUMsTUFBTTtRQUNsQyxhQUFhLENBQUMsSUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUQ7SUFDRCxNQUFNLEVBQUUsS0FBTSxTQUFRLFFBQVEsQ0FBQyxNQUFNO1FBQ2pDLGFBQWEsQ0FBQyxJQUFVLElBQUksT0FBTyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEY7Q0FDSixDQUFDO0FBSUYsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDIn0=