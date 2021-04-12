import {act, create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    test('status should be correct', () => {
        const test = create(<ProfileStatus status={'danya'} userId={2} profileId={1} setStatus={() => {
        }}/>);
        const root = test.root;

        expect(root.props.status).toBe('danya');
    })

    test('after creation span should be displayed', () => {
        const test = create(<ProfileStatus status={'danya'} userId={2} profileId={1} setStatus={() => {
        }}/>);
        const root = test.root;
        expect(root.findAllByType('span').length).toBe(1);
    })

    test('after creation span should contain correct status', () => {

        const test = create(<ProfileStatus status={'danya'} userId={2} profileId={1} setStatus={() => {
        }}/>);
        const root = test.root;
        let span = root.findByType('span');

        expect(span.props.children).toBe('danya');
    })

    test('after double click input should be displayed instead of span', () => {
        const test = create(<ProfileStatus status={'danya'} userId={1} profileId={1} setStatus={() => {
        }}/>);
        const root = test.root;
        let span = root.findByType('span');
        act(() => {
            span.props.onDoubleClick();
        })
        let span1 = root.findAllByType('span');
        let input = root.findAllByType('input')
        expect(span1.length).toBe(0);
        expect(input.length).toBe(1);
    })

    test(`after render input shouldn't be displayed`, () => {
        const test = create(<ProfileStatus status={'danya'} userId={1} profileId={1} setStatus={() => {
        }}/>);
        const root = test.root;
        let input = root.findAllByType('input')
        expect(input.length).toBe(0);
    })

    test(`if user id doesn't match profile id input shouldn't be displayed`, () => {
        const test = create(<ProfileStatus status={'danya'} userId={2} profileId={1} setStatus={() => {
        }}/>);
        const root = test.root;
        let span = root.findByType('span');
        act(() => {
            span.props.onDoubleClick();
        })
        let input = root.findAllByType('input')
        expect(input.length).toBe(0);
    })

    test(`callback should be called`, () => {
        const mockCallback = jest.fn();
        const test = create(<ProfileStatus status={'danya'} userId={1} profileId={1} setStatus={mockCallback}/>);
        const root = test.root;
        let span = root.findByType('span');
        act(() => {
            span.props.onDoubleClick();
        })
        let input = root.findByType('input');
        act(() => {
            input.props.onBlur();
        });
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})



