var Common = {
    commonAjaxTypeJson: function (url, method, params, successFunc, errorFunc) {
        $.ajax({
            url: url,
            type: method,
            data: params,
            dataType: 'json'
        }).done(function (data, status, jqXHR) {
            successFunc(data, status, jqXHR)
        }).fail(function (jqXHR, status, error) {
            errorFunc(jqXHR, status, error);
        })
    }
};