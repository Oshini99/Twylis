using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Net.Http.Headers;
using System.Web.Http.Description;

namespace WebAPI.Areas.HelpPage.Models
{
    
    /// The model that represents an API displayed on the help page.
    public class HelpPageApiModel
    {
        
        /// Initializes a new instance of the <see cref="HelpPageApiModel"/> class.
        public HelpPageApiModel()
        {
            SampleRequests = new Dictionary<MediaTypeHeaderValue, object>();
            SampleResponses = new Dictionary<MediaTypeHeaderValue, object>();
            ErrorMessages = new Collection<string>();
        }

        
        /// Gets or sets the <see cref="ApiDescription"/> that describes the API.
        public ApiDescription ApiDescription { get; set; }

        
        /// Gets the sample requests associated with the API.
        public IDictionary<MediaTypeHeaderValue, object> SampleRequests { get; private set; }

        
        /// Gets the sample responses associated with the API.
        public IDictionary<MediaTypeHeaderValue, object> SampleResponses { get; private set; }

        
        /// Gets the error messages associated with this model.
        public Collection<string> ErrorMessages { get; private set; }
    }
}