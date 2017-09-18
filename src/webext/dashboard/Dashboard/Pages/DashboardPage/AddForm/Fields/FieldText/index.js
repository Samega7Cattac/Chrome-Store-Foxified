import React, { PureComponent } from 'react'

import classnames from 'cmn/lib/classnames'

import './index.css'

import type { FieldProps } from 'redux-form'

type Props = {
    label: string,
    desc: string | Element,
    ...FieldProps, // below are the FieldProps i actually touch
    meta: {
        touched: boolean,
        error?: string
    },
    input: {},
}

class FieldText extends PureComponent<Props, void> {
    render() {
        const {meta:{ touched, error }, input, label } = this.props;

        return (
            <div className="Field">
                <div className="Field--row">
                    <label className={classnames('Field--label', error && 'Field--label--error')}>
                        {label}
                    </label>
                    <input {...input} type="text" className="Field--input-text" />
                </div>
                { touched && error &&
                    <div className="Field--row">
                        <div className="Field--label" />
                        <div className="Field--error">{error}</div>
                    </div>
                }
            </div>
        )
    }
}

export default FieldText
