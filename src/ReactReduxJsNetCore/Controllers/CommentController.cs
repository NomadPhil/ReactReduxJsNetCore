using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ReactJsNetCore.Models;

namespace ReactJsNet.Api
{
    [Route("api/[controller]")]
    public class CommentController : Controller
    {
        private static int _currentId = 2;

        private static readonly IList<Comment> comments = new List<Comment>()
        {
            new Comment
            {
                id = 1,
                author = "Walter White",
                text = "I am the one who knocks!"
            },
            new Comment
            {
                id = 2,
                author = "Roald Dahl",
                text = "A little nonsense now and then is relished by the wisest men."
            }
        }; 


        // GET api/Comment
        [HttpGet]
        public IEnumerable<Comment> Get()
        {
            return comments;
        }

        // POST api/Comment
        [HttpPost]
        public Comment Post([FromBody] Comment comment)
        {
            _currentId++;
            comment.id = _currentId;
            comments.Add(comment);

            return comment;
        }

        // DELETE api/Comment/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            comments.Remove(comments.FirstOrDefault(x => x.id == id));

            return id;
        }
    }
}