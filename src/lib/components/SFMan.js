// @flow
export default class SFMan{
    static getTitleFieldFromObject(obj)
    {
        let titleFieldName='displayName';
        if(!obj.hasOwnProperty(titleFieldName)) {
            titleFieldName = 'displayname';
            if (!obj.hasOwnProperty(titleFieldName)) {
                titleFieldName = 'name';
                if (!obj.hasOwnProperty(titleFieldName)) {
                    titleFieldName = 'title';
                    if (!obj.hasOwnProperty(titleFieldName)) {
                        titleFieldName = 'phone';
                        if (!obj.hasOwnProperty(titleFieldName))
                            titleFieldName = 'id';
                    }
                }
            }
        }
        return titleFieldName;
    }
}
