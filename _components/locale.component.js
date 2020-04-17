import React from 'react';
import { LocaleContext } from '../_contexts/locale.context';
import en from '../_locales/en.locale';
import hi from '../_locales/hi.locale';
import ta from '../_locales/ta.locale';

const translations = {
    en,
    hi,
    ta
};

class Locale extends React.Component {
    constructor(props) {
        super(props);
        // get saved langcode from localstorage
        let langCode = localStorage.getItem('langCode') || 'en';

        // validate the langcode with available languages
        if (!Object.keys(translations).includes(langCode)) {
            langCode = 'en';
        }

        this.state = {
            current: langCode
        };
        this.handle = this.handle.bind(this)
    }

    handle(s) {
        return translations[this.state.current][s.toLowerCase()] || s;
    }

    render() {
        return (
            <LocaleContext.Provider value={{
                current: this.state.current,
                handle: this.handle
            }}>
                <div className="LocaleSelector">
                    <select
                        defaultValue={this.state.current}
                        onChange={event => {
                            const langCode = event.target.value;
                            this.setState({ current: langCode }, () => {
                                localStorage.setItem('langCode', langCode);
                            });
                        }}>
                        {
                            Object.keys(translations).map(lang => (
                                <option key={lang} value={lang}>{lang.toUpperCase()}</option>
                            ))
                        }
                    </select>
                </div>
                {this.props.children}
            </LocaleContext.Provider>
        )
    }
}

export { Locale };